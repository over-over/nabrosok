let request = (id: number) => {
  return fetch('https://nabrosok39.timepad.ru/ticket/process/resend_ticket/', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-requested-with': 'XMLHttpRequest',
    },
    referrer: 'https://nabrosok39.timepad.ru/dashboard/event/1633645/orders/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: `event=1633645&reg_ids%5B%5D=${id}`,
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  });
};

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

// const tickets = Object.values(q.participants.items).map(i => i.ticket_id)

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

async function makeRequests(ids: number[]) {
  for (const id of ids) {
    // задержка в 70 или 100 секунд
    const ms = Math.round(getRandomArbitrary(70, 100) * 1000);
    await delay(ms);
    await request(id);
  }
}
