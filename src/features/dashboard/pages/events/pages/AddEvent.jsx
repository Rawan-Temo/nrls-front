import { useMutation, useQueryClient } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import APIClient from "../../../../../utils/ApiClient";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import Input from "../../../../../components/inputs/Input";
import Button from "../../../../../components/buttons/Button";
import { eventsSchema } from "./../../../../../schema/event";
import SelectInputApi from "../../../../../components/inputs/SelectInputApi";
import SelectOptionInput from "../../../../../components/inputs/SelectOptionInput";
import { eventType } from "../../../../../constant/enums";

const api = new APIClient(endPoints.events);

const AddEvent = () => {
  const formik = useFormik({
    initialValues: {
      post: "",
      event_type: "",
      location: "",
      event_date: "",
      attendess_count: "",
    },
    validationSchema: eventsSchema,
    onSubmit: (d) => handleConfirm.mutate(d),
  });

  const query = useQueryClient();
  const nav = useNavigate();

  const handleConfirm = useMutation({
    mutationFn: (d) => api.addData({ ...d, post: d.post?.id }),
    onSuccess: () => {
      query.invalidateQueries([endPoints.events]);
      nav(-1);
    },
  });

  const { t } = useTranslation();

  return (
    <>
      <Breadcrumbs />

      <form className="dashboard-form" onSubmit={formik.handleSubmit}>
        <div className="inputs-area">
          <SelectInputApi
            endPoint={endPoints.posts}
            onChange={(e) => formik.setFieldValue("post", e)}
            onIgnore={() => formik.setFieldValue("post", null)}
            placeholder={formik.values.post?.title || "select post"}
            errorText={formik.errors.post}
            label="post"
            optionLabel={(e) => e?.title}
            notRequired
            value={formik.values?.post}
          />
          <SelectOptionInput
            label="event_type"
            onSelectOption={(e) => formik.setFieldValue("event_type", e.value)}
            value={formik.values.event_type}
            options={eventType.map((e) => ({ text: e, value: e }))}
            errorText={formik.errors.event_type}
          />
          <Input
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            errorText={t(formik.errors.location)}
            label={t("location")}
            placeholder={t("location_placeholder")}
            notRequired
          />
          <Input
            name="event_date"
            value={formik.values.event_date}
            onChange={formik.handleChange}
            errorText={t(formik.errors.event_date)}
            label={t("event_date")}
            type="date"
            notRequired
          />
          <Input
            name="attendess_count"
            value={formik.values.attendess_count}
            onChange={formik.handleChange}
            errorText={t(formik.errors.attendess_count)}
            label={t("attendess_count")}
            type="number"
            placeholder={t("number_placeholder")}
          />
        </div>
        <Button type="submit"> save </Button>
      </form>
    </>
  );
};

export default AddEvent;
