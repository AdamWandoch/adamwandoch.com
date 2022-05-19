const BASE_API_URL = "https://indeed-bot-api.herokuapp.com/jobs/";

async function displayCards() {
  document.getElementById("records").textContent = "Waiting for data..";
  
  const keyword = document.getElementById("keyword").value;
  const sort = document.getElementById("sort").value;
  let api_url = BASE_API_URL;
  if (keyword !== "") {
    api_url += `${document.getElementById("where").value}/${keyword}`;
    if (sort !== "none") {
      api_url += `/sort/${sort}`;
    }
  }
  
  const response = await fetch(api_url);
  const data =  await response.json();
  const { recordList } = data;
  document.getElementsByTagName("h3")[0]
          .textContent = `Records found: ${recordList.length}`;

  let recordsHTML = "";
  for (let i = 0; i < recordList.length; i++) {
    const record = recordList[i];
    recordsHTML += `<div class="card">
                        <div class="title">${record.title}</div>
                        <div class="company">( ${record.company} )</div>
                        <div class="link">
                          <a href="${record.url}" target="_blank">READ MORE</a>
                        </div>
                     </div>`;
  }

  document.getElementById("records").innerHTML = recordsHTML;
}
