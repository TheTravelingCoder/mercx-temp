function login() {
  Swal.fire({
    title: 'Login Form',
    html: `<input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const password = Swal.getPopup().querySelector('#password').value
      if (!password) {
        Swal.showValidationMessage(`Please enter password`)
      }
      return { password: password }
    }
  }).then((result) => {
    axios.post('https://yf3367rah23onmk5ukpwfsxfre0wrlgk.lambda-url.us-west-2.on.aws/', result.value.password).then((res) => {
      if (res.data === true) {
        $('#myIFrame').removeClass('iframe-wrapper');
        $('#login').hide();
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: 'Incorrect password',
          icon: 'error'
        })
      }
    })
  })
}

$(document).ready(function(e) {
  $('#myIFrame').attr('src','https://zoop.io/#ewaxohobsdf12346751418213');
  localStorage.setItem('sk+/show-sidebar-left', 'false');
});
