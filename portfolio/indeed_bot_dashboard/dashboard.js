const api_url = "https://indeed-bot-api.herokuapp.com/jobs/";

async function displayCards() {
  const response = await fetch(api_url);
  const data =  await response.json();
  const { recordList } = data;
  document.getElementsByTagName("h3")[0]
          .textContent += ` ${recordList.length},
          for testing I only display first 100`;

  let recordsHTML = "";
  for (let i = 0; i < recordList.length && i < 100; i++) {
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

displayCards();

