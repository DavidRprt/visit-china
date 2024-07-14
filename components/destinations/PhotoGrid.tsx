"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const PhotoGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full max-w-7xl mx-auto relative">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`relative bg-cover rounded-lg bg-center ${card.className}`}
          style={{ backgroundImage: `url(${card.thumbnail})` }}
        >
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div className="relative p-4 z-10">{card.content}</div>
        </div>
      ))}
    </div>
  )
};

export default PhotoGrid