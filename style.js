
function handleTabClick(tabType) {
  var buttons = document.querySelectorAll('.tab-buttons button');
  buttons.forEach(function(btn) {
    if (btn.dataset.tab === tabType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  var tabs = document.querySelectorAll('.tab-content .login_tab');
  tabs.forEach(function(tab) {
    if (tab.dataset.tab === tabType) {
      tab.classList.add('active_tab');
    } else {
      tab.classList.remove('active_tab');
    }
  });
}

  

// PIN & OTP

function handleInput(currentInput, nextInput) {
    if (currentInput.value.length === currentInput.maxLength) {
      nextInput.focus();
    }
  }
  
  function handleInputTwo(currentInput, nextInput) {
    if (currentInput.value.length === currentInput.maxLength) {
      nextInput.focus();
    }
  }
  
  function handleInputThree(currentInput, nextInput) {
    if (currentInput.value.length === currentInput.maxLength) {
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  
  function handleBackspace(currentInput, previousInput) {
    if (currentInput.value.length === 0 && event.keyCode === 8) {
      previousInput.focus();
    }
  }