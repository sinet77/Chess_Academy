import { Box, Button, CircularProgress, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as style from "./Articles.styles";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRSS = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://theweekinchess.com/twic-rss-feed"
      );

      const textIn_XML_Format = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(textIn_XML_Format, "text/xml");
      const items = Array.from(xmlDoc.getElementsByTagName("item"));

      const articlesData: Article[] = items.map((item) => ({
        title: item.getElementsByTagName("title")[0].textContent || "",
        link: item.getElementsByTagName("link")[0].textContent || "",
        description:
          item.getElementsByTagName("description")[0].textContent || "",
        pubDate: item.getElementsByTagName("pubDate")[0].textContent || "",
      }));

      setArticles(articlesData);
    } catch (error) {
      console.error("Błąd podczas pobierania RSS:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRSS();
  }, []);

  const nextArticle = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousArticle = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <Box sx={style.Circular}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={style.ArticlesBox}>
      {articles.length > 0 && (
        <Box sx={style.ArticlesBox}>
          <Box sx={style.Title}>{articles[currentIndex].title}</Box>
          <Box sx={style.PubDate}>{articles[currentIndex].pubDate}</Box>

          <Box
            dangerouslySetInnerHTML={{
              __html: articles[currentIndex].description,
            }}
          />
          <Link
            sx={style.ReadMore}
            href={articles[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </Link>
          <Box sx={style.ButtonContainer}>
            <Button
              variant="outlined"
              sx={style.ButtonPrev}
              onClick={previousArticle}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              sx={style.ButtonNext}
              onClick={nextArticle}
              disabled={currentIndex === articles.length - 1}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Articles;
