import { useMemo, useState } from "react";
import dateFormatter from "./../../../../../utils/dateFormatter";
import { useDashboardContext } from "../../../../../context/DashboardContext";
import { useFetchData } from "./../../../../../hooks/useFetchData";
import endPoints from "../../../../../constant/endPoints";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import TableToolBar from "./../../../../../components/table_toolbar/TableToolBar";
import Search from "./../../../../../components/table_toolbar/Search";
import Table from "../../../../../components/table/Table";
import CreateBackup from "../components/CreateBackup";
import "../style/style.css";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Restore from "../components/Restore";
import Replace from "../components/Replace";
import { icons } from "../../../../../constant/icons";
import Delete from "../components/Delete";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../../../utils/axios";
import UploadBackup from "../components/UploadBackup";

const Backups = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [replace, setReplace] = useState(null);
  const [restore, setRestore] = useState(null);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const { page_size } = useDashboardContext();

  const { data, isLoading, error, refetch } = useFetchData({
    endPoints: endPoints.backup,
    page,
    page_size,
    ordering: sort,
    search,
  });

  const { t } = useTranslation();

  const handleDownload = useMutation({
    mutationFn: async (name) =>
      await axiosInstance.get(`${endPoints.backup}download/${name}/`),
  });

  const column = useMemo(
    () => [
      {
        name: "filename",
        headerName: "filename",
        sort: true,
      },
      {
        name: "file_path",
        headerName: "file_path",
      },
      {
        name: "type",
        headerName: "type",
      },
      {
        name: "size",
        headerName: "size",
        sort: true,
      },
      {
        name: "created_at",
        headerName: "created_at",
        sort: true,
        getCell: ({ row }) => dateFormatter(row.created_at, "fullDate"),
      },
      {
        name: "actions",
        headerName: "actions",
        getCell: ({ row }) => (
          <div className="center gap-10">
            <Button
              btnStyleType="transparent"
              btnType="delete"
              onClick={() => setSelectedFile(row.filename)}
            >
              <FontAwesomeIcon icon={icons.delete} />
            </Button>

            <Button
              btnStyleType="transparent"
              btnType="delete"
              onClick={() => handleDownload.mutate(row.filename)}
            >
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </div>
        ),
      },
      {
        name: "backup actions",
        headerName: "backup actions",
        getCell: ({ row }) => (
          <div className="center gap-10">
            <Button
              btnStyleType="transparent"
              btnType="update"
              onClick={() => setReplace(row)}
            >
              <FontAwesomeIcon icon={icons.replaceBackup} />
              replace
            </Button>
            <Button
              btnStyleType="transparent"
              btnType="save"
              onClick={() => setRestore(row)}
            >
              <FontAwesomeIcon icon={icons.restoreBackup} />
              restore
            </Button>
          </div>
        ),
      },
    ],
    [handleDownload],
  );

  return (
    <>
      <Breadcrumbs />

      <div className="table-container">
        <TableToolBar title={t("pages.backup")}>
          <Search setSearch={setSearch} />
          <CreateBackup />
          <UploadBackup />
        </TableToolBar>
        <Table
          colmuns={column}
          currentPage={page}
          data={data?.data}
          dataLength={data?.totalCount}
          loading={isLoading}
          setPage={setPage}
          setSort={setSort}
          error={error}
          onRefetch={refetch}
          sortBy={sort}
        />
      </div>
      {restore && <Restore restore={restore} setRestore={setRestore} />}
      {replace && <Replace replace={replace} setReplace={setReplace} />}
      {selectedFile && (
        <Delete file={selectedFile} setSelectedFile={setSelectedFile} />
      )}
    </>
  );
};

export default Backups;
