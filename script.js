let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    let fname = document.getElementById('firstname');
    let lname = document.getElementById('lastname');
    let gender = document.querySelector('input[name="Gender"]:checked');
    let food = document.getElementById('Food');
    let Address = document.getElementById('Address');
    let State = document.getElementById('State');
    let country = document.getElementById('country');
    let zipcode = document.getElementById('zipcode');
    let foodArray = [...food.selectedOptions];
    let isEmpty ;
    if(fname.value == '' || lname.value == '' || foodArray.length == 0 || Address.value == '' || State.value == '' || country.value == '' || zipcode.value == ''|| gender.value == '') {
        window.alert('Enter all fields');
    }
    else if(foodArray.length <2) {
        window.alert('Minimum two food items has to be selected');
    }
    else {
        let tbody = document.getElementById('tbody');
        let foodString;
        foodArray.forEach(item => {
            foodString ? foodString = foodString +', '+item.value : foodString = item.value;
        })
        let trow = document.createElement('tr');
        let fnameTD = document.createElement('td');
        fnameTD.innerHTML = fname.value
        let lnameTD = document.createElement('td');
        lnameTD.innerHTML = lname.value;
        let genderTD = document.createElement('td');
        genderTD.innerHTML = gender.value;
        let foodTD = document.createElement('td');
        foodTD.innerHTML = foodString;
        let addressTD = document.createElement('td');
        addressTD.innerHTML = Address.value
        let stateTD = document.createElement('td');
        stateTD.innerHTML = State.value
        let countryTD = document.createElement('td');
        countryTD.innerHTML = country.value
        let zipTD = document.createElement('td');
        zipTD.innerHTML = zipcode.value;

        trow.append(fnameTD,lnameTD,genderTD,foodTD,addressTD,stateTD,countryTD,zipTD);
        tbody.append(trow);
        fname.value = '';
        lname.value = ''
        Address.value = ''
        State.value = ''
        country.value = ''
        zipcode.value = ''

        let radioElements = document.getElementsByName("Gender");
        radioElements.forEach(item => {
            item.checked = false;
        }) 

        foodArray.forEach(item => {
            item.selected = false;
        })   
    }
})