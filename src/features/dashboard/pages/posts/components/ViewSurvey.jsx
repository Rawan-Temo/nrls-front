import { useQuery } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import axiosInstance from "../../../../../utils/axios";
import "../style/survey.css";

const ViewSurvey = ({ id }) => {
  const { data } = useQuery({
    queryKey: [endPoints.surveyPost, id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`${endPoints.surveyPost}${id}/`);
      return data.data?.[0];
    },
  });

  const { data: options } = useQuery({
    queryKey: [endPoints.surveyOptionsById, id],
    queryFn: async () => {
      const { data: res } = await axiosInstance.get(
        `${endPoints.surveyOptionsById}${data.id}/`,
      );

      return res.data || [];
    },
    enabled: Boolean(data?.id),
  });

  if (!data || options?.length === 0) return;

  return (
    <main className="survey-container border-bottom">
      <h2 className="question"> {data?.question} </h2>
      <section className="options">
        {options?.map((e) => (
          <div className="option" key={e.id}>
            <p></p>
            {e.option_text}
          </div>
        ))}
      </section>
    </main>
  );
};

export default ViewSurvey;
