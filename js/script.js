const mailArray = [];

const getEmails = async () => {
  const requests = [];

  for (let i = 0; i < 10; i++) {
    requests.push(
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    );
  }

  try {
    const responses = await Promise.all(requests);
    const mailArray = responses.map((response) => response.data.response);

    const list = document.getElementById("emailList");
    mailArray.forEach((email) => {
      const listItem = document.createElement("li");
      listItem.textContent = email;
      list.appendChild(listItem);
    });
  } catch (error) {
    console.error("Errore nel recupero delle email:", error);
  }
};

getEmails();
