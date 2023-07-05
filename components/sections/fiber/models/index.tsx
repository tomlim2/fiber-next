"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostTime from "../common/postProject";
import styles from "../common/fiber.module.scss";
import { modelManager } from "./modelManager";
import { currentWeather } from "@/store/storeFiber";
import { useRecoilState } from "recoil";
import { stringToHexCode, hexCodeToColor } from "@/lib/utils";

const SectionModels = () => {
  
  return (
    <div className={styles["section-shader"]}>
      <div className={styles["container-shader"]}>
        {modelManager.map((item, index) => {
          return (
            <PostTime
              key={index}
              shaderIndex={index}
              canvasComponent={item.component}
              info={item.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionModels;
