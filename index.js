import{a as n,S as p,i as o}from"./assets/vendor-2TIoixgK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="53617461-9e512d52b7eb3a5977460a0f4";n.defaults.baseURL="https://pixabay.com/api/";function d(a){return n.get("",{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),y=new p(".js-gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:l,comments:f,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}"
          ><img class="gallery-image" src="${i}" alt="${e}"
        /></a>
        <ul class="gallery-info">
          <li class="info-item">
            <p class="label">Likes</p>
            <p class="value">${t}</p>
          </li>
          <li class="info-item">
            <p class="label">Views</p>
            <p class="value">${l}</p>
          </li>
          <li class="info-item">
            <p class="label">Comments</p>
            <p class="value">${f}</p>
          </li>
          <li class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${m}</p>
          </li>
        </ul>
      </li>`).join("");c.innerHTML=r,y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.add("is-visible")}function v(){u.classList.remove("is-visible")}o.settings({timeout:2e3,position:"topRight",progressBar:!1});const S=document.querySelector(".js-search-form"),w=function(a){a.preventDefault();const r=a.currentTarget,i=r.elements["search-text"].value.trim();if(i===""){o.warning({message:"Please enter a search query."});return}b(),L(),d(i).then(function(s){if(!s.hits||s.hits.length===0){o.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(s.hits)}).catch(function(){o.error({message:"Something went wrong. Please try again later."})}).finally(function(){v(),r.reset()})};S.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
