function calculateAge() {
    const dobInput = document.getElementById('dob-input').value;
    const todayInput = document.getElementById('today-input').value;
  
    if (dobInput === '' || todayInput === '') {
      document.getElementById('age-output').innerText = "Please fill out both dates.";
      return;
    }
  
    const dob = new Date(dobInput);
    const today = new Date(todayInput);
  
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += lastMonth;
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('age-output').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  