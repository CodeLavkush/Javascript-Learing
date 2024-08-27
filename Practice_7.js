function createCrads(Cname, views, monthsOld, duration, thumbnail, title){
    let viewStr
    if(views < 1000000){
        viewStr = views / 1000 + 'K'
    }
    else if(views > 1000000){
        viewStr = views / 1000 + 'M'
    }
    else if(views < 1000){
        viewStr = views / 100 + 'k'
    }
    else{
        viewStr = views / 1000 + 'K'
    }
    let html = `<div class="Cards">
        <div class="image">
          <img
            src=${thumbnail}
            alt=""
          />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${Cname}. ${viewStr} . ${monthsOld} months ago</p>
        </div>
      </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCrads("codewithharry",60000, 4, "20:00","https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEoDwrQoTELgI-X7BTCJYva_ekhg", "basics of express js | sigma web dev #1")