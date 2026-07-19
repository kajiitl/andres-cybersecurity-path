import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { SitePage } from "./site";
import "./style.css";

type PageKey = "home" | "hcc" | "beyond" | "career" | "technology" | "sources";
const pathMap: Record<string, PageKey> = {
  "/": "home", "/academics-hcc": "hcc", "/academics-beyond-hcc": "beyond",
  "/future-career": "career", "/emerging-technology": "technology", "/works-cited": "sources"
};
function currentPage(): PageKey { return pathMap[location.hash.slice(1) || "/"] || "home"; }
function App(){
  const [page,setPage]=useState<PageKey>(currentPage());
  useEffect(()=>{const onHash=()=>{setPage(currentPage());scrollTo(0,0)};addEventListener("hashchange",onHash);return()=>removeEventListener("hashchange",onHash)},[]);
  useEffect(()=>{const onClick=(e:MouseEvent)=>{const a=(e.target as HTMLElement).closest("a");if(!a)return;const href=a.getAttribute("href");if(href && pathMap[href]){e.preventDefault();location.hash=href}};document.addEventListener("click",onClick);return()=>document.removeEventListener("click",onClick)},[]);
  return <SitePage page={page}/>;
}
createRoot(document.getElementById("root")!).render(<App/>);
