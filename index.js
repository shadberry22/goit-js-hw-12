import{a as m,S,i}from"./assets/vendor-2TIoixgK.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="53617461-9e512d52b7eb3a5977460a0f4";m.defaults.baseURL="https://pixabay.com/api/";const d=15;async function f(t,s){return(await m.get("",{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:s}})).data}const h=document.querySelector(".js-gallery"),g=document.querySelector(".js-loader"),y=document.querySelector(".js-load-more"),M=new S(".js-gallery a",{captionsData:"alt",captionDelay:250});function p(t){const s=t.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:w,downloads:P})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}"
          ><img class="gallery-image" src="${o}" alt="${e}"
        /></a>
        <ul class="gallery-info">
          <li class="info-item">
            <p class="label">Likes</p>
            <p class="value">${r}</p>
          </li>
          <li class="info-item">
            <p class="label">Views</p>
            <p class="value">${n}</p>
          </li>
          <li class="info-item">
            <p class="label">Comments</p>
            <p class="value">${w}</p>
          </li>
          <li class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${P}</p>
          </li>
        </ul>
      </li>`).join("");h.insertAdjacentHTML("beforeend",s),M.refresh()}function E(){h.innerHTML=""}function b(){g.classList.add("is-visible")}function L(){g.classList.remove("is-visible")}function v(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}i.settings({timeout:2e3,position:"topRight",progressBar:!1});const j=document.querySelector(".js-search-form"),B=document.querySelector(".js-load-more");let u="",l=1;const $=async t=>{t.preventDefault();const s=t.currentTarget,o=s.elements["search-text"].value.trim();if(o===""){i.warning({message:"Please enter a search query."});return}u=o,l=1,E(),c(),b();try{const a=await f(u,l);if(!a.hits||a.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(a.hits);const e=Math.ceil(a.totalHits/d);l<e?v():(c(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({message:"Something went wrong. Please try again later."})}finally{L(),s.reset()}},O=async()=>{l+=1,c(),b();try{const t=await f(u,l);if(!t.hits||t.hits.length===0){c(),i.info({message:"We're sorry, but you've reached the end of search results."});return}p(t.hits);const s=document.querySelectorAll(".gallery-item");if(s.length>0){const{height:a}=s[0].getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}const o=Math.ceil(t.totalHits/d);l<o?v():(c(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({message:"Something went wrong. Please try again later."})}finally{L()}};j.addEventListener("submit",$);B.addEventListener("click",O);
//# sourceMappingURL=index.js.map
