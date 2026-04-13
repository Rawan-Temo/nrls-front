import "../style/home.css";
import TopicsNews from "../components/TopicsNews";
import MediaNews from "../components/MediaNews";
import EventNews from "../components/EventNews";
import SurveyNews from "../components/SurveyNews";
import Publications from "../components/Publications";
import LastNews from "../components/LastNews";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const Home = () => {
  const { i18n } = useTranslation();
  const language = useMemo(() => i18n.language, [i18n.language]);

  return (
    <div className="sub-news-container">
      <LastNews language={language} />

      <TopicsNews language={language} />

      <MediaNews language={language} />

      <EventNews language={language} />

      <SurveyNews language={language} />

      <Publications />
    </div>
  );
};

export default Home;
