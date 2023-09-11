const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const phoneInput = document.querySelector('#phone-input');
const formBtn = document.querySelector('#form-btn');
const infoText = document.querySelector('#info-text');
const contactsContainer = document.querySelector('#contacts-container');
const editBtn = document.querySelector('#edit-btn');
const deleteBtn = document.querySelector('#delete-btn');
const addBtn = document.querySelector('#add-btn');
const closeFormBtn = document.querySelector('#close-form-btn');


const NAME_REGEX = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+\s[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
const PHONE_REGEX =  /^[+0-9][0-9- ()_]{4,20}$/;

let nameValidation = false; 
let phoneValidation = false;

const validation = (input, regexValidation) => {

    if (nameValidation && phoneValidation) {
        formBtn.classList.remove('cursor-not-allowed')
        formBtn.disabled = false;
    } else {
        formBtn.disabled = true;
    }
    
    if (input.value === '') {
        input.classList.remove('outline-red-700', 'outline-2', 'outline')
        input.classList.remove('outline-green-700', 'outline-2', 'outline')
        input.classList.add('focus:outline-orange-500')
    }
    else if (regexValidation) {
        input.classList.remove('focus:outline-orange-500')
        input.classList.remove('outline-red-700', 'outline-2', 'outline')
        input.classList.add('outline-green-700', 'outline-2', 'outline')
        input.parentElement.children[2].classList.add('invisible');

    } else if (!regexValidation){
        input.classList.remove('focus:outline-orange-500')
        input.classList.remove('outline-green-700', 'outline-2', 'outline')
        input.classList.add('outline-red-700', 'outline-2', 'outline')
        input.parentElement.children[2].classList.remove('invisible');
    }
};

// Events
nameInput.addEventListener('input', e => {
    nameValidation = NAME_REGEX.test(e.target.value);
    validation(nameInput, nameValidation);
})

phoneInput.addEventListener('input', e => {
    phoneValidation = PHONE_REGEX.test(e.target.value);
    validation(phoneInput, phoneValidation);
})


form.addEventListener('submit', async e  => {
    e.preventDefault();

    form.classList.add('hidden');

    const newContact = {
        contactname: nameInput.value,
        phone: phoneInput.value,
    }
    const { data } = await axios.post('/api/contacts', newContact);



    const listItem = document.createElement('div');
	listItem.id = data.id;
	listItem.classList.add('bg-slate-200', 'p-4' ,'rounded-md', 'w-4/5', 'flex' ,'flex-row', 'justify-between', 'items-center', 'shadow-md', 'relative');
	listItem.innerHTML = `

    <div class="flex justify-between items-center w-full">
    <svg class="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
        
    <div id="contact-info" class="flex flex-col gap-1 ml-4 w-2/4">
        <input type="text" id="name-added" class="font-bold bg-transparent w-full" value="${data.contactname}" readonly>
        <input type="text" id="phone-added" class="bg-transparent w-full" value="${data.phone}" readonly>
    </div>
    <svg id="option-mobile-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
    </div>
    <div id="option-mobile-menu" class="bg-slate-100 flex flex-col w-20 absolute top-16 right-5 rounded-md p-4 shadow-md z-10 hidden">
        <button id="edit-btn">Edit</button>
        <button id="delete-btn" class="mt-4">Delete</button>
    </div>
</div>
	`;
    
    
	// Append listItem
	contactsContainer.append(listItem);



    addBtn.parentElement.classList.remove('hidden');
    nameInput.value = '';
    phoneInput.value = '';
    validation(nameInput);
    validation(phoneInput);
    nameValidation = false;
    phoneValidation = false;
    formBtn.disabled = true;
});

contactsContainer.addEventListener('click', async e => {


    if (e.target.closest('#option-mobile-btn')) {

        const optionMobileBtn = e.target.closest('#option-mobile-btn');
        const optionMobileMenu = optionMobileBtn.parentElement.parentElement.children[1];

        const editBtn = optionMobileMenu.children[0];
        const deleteBtn = optionMobileMenu.children[1];

        if (optionMobileMenu.classList.contains('hidden')) {
            optionMobileMenu.classList.remove('hidden');
            optionMobileMenu.classList.add('active')
            console.log('activo');

            // Edit contact

            editBtn.addEventListener('click', async e  => {
                const editInputName = editBtn.parentElement.parentElement.children[0].children[1].children[0];

                const editInputPhone = editBtn.parentElement.parentElement.children[0].children[1].children[1];

                if (editBtn.classList.contains('editando')) {

                   const listItem = editBtn.parentElement.parentElement;

                      // Cuando edita
                    // Remuevo la clase de editando para indicar que esta guardando los cambios
                    editBtn.classList.remove('editando');
                    // Guardo el nuevo valor del input
                    editInputPhone.setAttribute('value', editInputPhone.value);
                    editInputName.setAttribute('value', editInputName.value);
                    editInputPhone.setAttribute('readonly', 'true');
                    editInputName.setAttribute('readonly', 'true');
                    // Coloco el icono de editar
                    editBtn.innerHTML = "Edit";

                
                    editInputPhone.classList.remove('outline-green-700', 'outline-2', 'outline');
                    editInputName.classList.remove('outline-green-700', 'outline-2', 'outline');

                    await axios.patch(`/api/contacts/${listItem.id}`, {contactname: editInputName.value, phone: editInputPhone.value});

                } else {

                    

                    // **Validacion**
        let nameAddedValidation = true;
        let phoneAddedValidation = true;

        
        const validateAddedInput = (input, regexValidation) => {
            if (nameAddedValidation && phoneAddedValidation) {
                editBtn.classList.remove('hidden');
            } else {
                editBtn.classList.add('hidden');
            }
            if (regexValidation) {
                input.classList.remove('outline-red-700', 'outline-2', 'outline')
                input.classList.remove('focus:outline-orange-500')
                input.classList.add('outline-green-700', 'outline-2', 'outline')
            } else {
                input.classList.remove('focus:outline-orange-500')
                input.classList.remove('outline-green-700', 'outline-2', 'outline')
                input.classList.add('outline-red-700', 'outline-2', 'outline')
            }};



        editInputName.addEventListener('input', e => {
            nameAddedValidation = NAME_REGEX.test(editInputName.value);
            validateAddedInput(editInputName, nameAddedValidation);
            
        });
        
        editInputPhone.addEventListener('input', e => {
            phoneAddedValidation = PHONE_REGEX.test(editInputPhone.value);
            validateAddedInput(editInputPhone, phoneAddedValidation);
            console.log(phoneAddedValidation);
        });
        
        
                    // Nueva clase editando para indicar el estado del boton
                    editBtn.classList.add('editando');
                    // Remuevo el atributo readonly para poder escribir en el input
                    editInputPhone.removeAttribute('readonly');
                    editInputName.removeAttribute('readonly');
                    editInputPhone.classList.add('editing');
                    editInputName.classList.add('editing');
                    const end = editInputPhone.value.length;
                    editInputPhone.setSelectionRange(end, end);
                    editInputPhone.focus();
                    // Cambio el icono a un lapiz para indicarle al usuario que esta editando
                    editBtn.innerHTML = "Save";
                    
                }       

            })

            

            // Delete contact

            deleteBtn.addEventListener('click', async e => {

                console.log('delete');
                const li = e.target.closest('#delete-btn').parentElement.parentElement;               
	        	await axios.delete(`/api/contacts/${li.id}`);
	        	li.remove();
            })

        } 
        
         else if (optionMobileMenu.classList.contains('active')) {
            optionMobileMenu.classList.remove('active');
            optionMobileMenu.classList.add('hidden');
        }

        

       
           
          

        
         }

		

	


		
});


addBtn.addEventListener('click', e => {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        addBtn.parentElement.classList.add('hidden');
    } else {
        form.classList.add('hidden');
        addBtn.parentElement.classList.remove('hidden');
    }

    closeFormBtn.addEventListener('click', e => {
        form.classList.add('hidden');
        addBtn.parentElement.classList.remove('hidden');
    })
    
});

(async () => {

	try {
		const { data } = await axios.get('/api/contacts', {
			withCredentials: true
		});

		
		data.forEach(contact => {

    
			const listItem = document.createElement('div');
	listItem.id = contact.id;
	listItem.classList.add('bg-slate-200', 'p-4' ,'rounded-md', 'w-4/5', 'flex' ,'flex-row', 'justify-between', 'items-center', 'shadow-md', 'relative');
	listItem.innerHTML = `

    <div class="flex justify-between items-center w-full">
    <svg class="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
        
    <div id="contact-info" class="flex flex-col gap-1 ml-4 w-2/4">
        <input type="text" id="name-added" class="font-bold bg-transparent w-full" value="${contact.contactname}" readonly>
        <input type="text" id="phone-added" class="bg-transparent w-full" value="${contact.phone}" readonly>
    </div>
    <svg id="option-mobile-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
    </div>
    <div id="option-mobile-menu" class="bg-slate-100 flex flex-col w-20 absolute top-16 right-5 rounded-md p-4 shadow-md z-10 hidden">
        <button id="edit-btn">Edit</button>
        <button id="delete-btn" class="mt-4">Delete</button>
    </div>
</div>
			`;
			
			contactsContainer.append(listItem);
		})

	} catch (error) {
		window.location.pathname = '/login'
	}
})();




