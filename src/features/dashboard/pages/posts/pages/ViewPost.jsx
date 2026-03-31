import { Link, useParams } from "react-router";
import APIClient from "../../../../../utils/ApiClient";
import { useQuery } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import HandleError from "./../../../../../components/error/HandleError";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import imgServerSrc from "../../../../../utils/imgServerSrc";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import dateFormatter from "../../../../../utils/dateFormatter";
import "../style/style.css";
import "quill/dist/quill.snow.css";

const api = new APIClient(endPoints.posts);

const ViewPost = () => {
  const { id } = useParams();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [endPoints.posts, id],
    queryFn: () => api.getOne(id),
  });

  const { i18n } = useTranslation();
  const language = useMemo(() => i18n.language, [i18n.language]);

  if (isLoading) return <Skeleton height="400px" />;

  if (error) return <HandleError error={error} refetch={refetch} />;

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: data?.title }]} />
      <section className="post-view-container">
        <main className="post-main-info">
          <h1 className="post-title border-bottom">{data?.title}</h1>

          {data?.excerpt && (
            <div className="border-bottom">
              <p className="excerpt"> {data?.excerpt} </p>
            </div>
          )}

          <div className="post-info">
            <Link
              className="author  link-hover"
              to={dashboardRouts.author.view(data?.author?.id)}
            >
              <article className="author-profile">
                {data?.author?.full_name?.[0]}
              </article>
              {data?.author?.full_name}
            </Link>
            <div>
              <p> content_type </p>
              <span>{data?.content_type}</span>
            </div>
            <div>
              <p> category </p>
              <span>{data?.category?.[`name_${language}`]}</span>
            </div>
            <div>
              <p> created_at </p>
              <span>{dateFormatter(data?.created_at, "fullDate")}</span>
            </div>
          </div>

          <div className="cover-image">
            <img
              src={imgServerSrc(
                data?.featured_image || data?.original_post?.featured_image,
              )}
              alt=""
            />
          </div>

          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          ></div>
        </main>
        <aside className="post-sidebar"></aside>
      </section>
    </>
  );
};

export default ViewPost;
