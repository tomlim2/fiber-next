import axios from "axios";
import styles from "./navigation.module.scss";
import Link from "next/link";

import { stringToHexCode, hexCodeToColor } from "@/lib/utils";
import { currentWeather } from "@/store/storeFiber";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

const Navigation: React.FC = () => {
  const [weatherColor, setCurrentWeatherColor] = useRecoilState(currentWeather);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
        const city = "Seoul";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
        let weatherDescription = response.data.weather[0].description;
        let weatherToHexCode = stringToHexCode(weatherDescription);
        let HexCodeToColor = hexCodeToColor(weatherToHexCode);
        setCurrentWeatherColor(HexCodeToColor);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.menu}>
          <li className="menu">
            <Link href="/">
              ylim |{" "}
              <span style={{ fontSize: "0.75rem", color: weatherColor }}>
                {weatherColor}
              </span>
            </Link>
          </li>
          <li className="menu">
            <Link href="/about">about</Link>
          </li>
        </ul>
      </header>
      <footer className={styles.footer}>
        <ul className={styles.menu}>
          <li>
            <Link href="/exps">tomandlim@gmail.com</Link>
          </li>
          <li>
            The purpose of all works this website is only for showing progress
            of the study.
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Navigation;
