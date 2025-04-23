let mailArray = [];

const getEmails = async () => {
  const requests = [];

  for (let i = 0; i < 10; i++) {
    requests.push(
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    );
  }

  try {
    const responses = await Promise.all(requests);
    mailArray = responses.map((response) => response.data.response);

    // Stampare le email in una lista
    mailArray.forEach((email, index) => {
      console.log(`${index + 1}: ${email}`);
    });
  } catch (error) {
    console.error("Errore nel recupero delle email:", error);
  }
};

getEmails();
