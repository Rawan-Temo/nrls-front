import { useQuery } from "@tanstack/react-query";
import endPoints from "./../../../../../constant/endPoints";
import axiosInstance from "../../../../../utils/axios";
import Skeleton from "./../../../../../components/skeleton/Skeleton";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import { icons } from "./../../../../../constant/icons";
import { faEye, faLanguage, faPause } from "@fortawesome/free-solid-svg-icons";
import { getPercent } from "./../../../../../utils/getPercent";
import { languages } from "../../../../../constant/languages";

const Statistics = () => {
  const { data, isLoading } = useQuery({
    queryKey: [endPoints.statistics],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endPoints.statistics);
      return data?.data || null;
    },
  });

  if (isLoading) return <Skeleton height="300px" />;

  return (
    <>
      <Breadcrumbs />
      <section className="statistic-counts">
        <div className="count-container">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={icons.posts} />
          </div>
          <div className="count-info">
            <p>Total Posts</p>
            <h3>{data?.total_posts || 0}</h3>
          </div>
        </div>

        <div className="count-container">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faLeanpub} />
          </div>
          <div className="count-info">
            <p>Published Posts</p>
            <h3>{data?.published_posts || 0}</h3>
          </div>
        </div>

        <div className="count-container">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faPause} />
          </div>
          <div className="count-info">
            <p>Draft Posts</p>
            <h3>{data?.draft_posts || 0}</h3>
          </div>
        </div>

        <div className="count-container">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="count-info">
            <p>Total Views</p>
            <h3>{data?.total_views || 0}</h3>
          </div>
        </div>
      </section>

      <section className="statistic-details">
        <div className="statistic-container by-language">
          <h2>
            <FontAwesomeIcon icon={faLanguage} /> posts By Language
          </h2>

          {Object.entries(data?.by_language)?.map(([key, value]) => {
            const percent = parseInt(getPercent(value, data?.total_posts));
            const search = key.toLowerCase();
            const lang = languages.find(
              (lang) => lang.value.toLowerCase() === search,
            );

            return (
              <div className="percent" key={key}>
                <p>{lang?.title}</p>
                <div>
                  <span style={{ width: `${percent}%` }}></span>
                </div>
                <h3>{value}</h3>
              </div>
            );
          })}
        </div>

        <div className="statistic-container">
          <h2>
            <FontAwesomeIcon icon={icons.category} /> posts By type
          </h2>

          {Object.entries(data?.by_content_type)?.map(([key, value]) => {
            const search = key.toLowerCase();
            const percent = parseInt(getPercent(value, data?.total_posts));

            return (
              <div className="percent" key={key}>
                <p>{search}</p>
                <div style={{ "--main-color": `var(--color-${search})` }}>
                  <span style={{ width: `${percent}%` }}></span>
                </div>
                <h3>{value}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Statistics;
