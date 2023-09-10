const navBar = document.querySelector('#navbar');

const createNavHome = () => {
    navBar.innerHTML= `
    <div class="max-w-7xl h-16 mx-auto flex items-center justify-between px-4">
                   
        <a class="text-2xl font-bold font-courgette flex items-center gap-2 text-white" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Contactly
        </a>

<!-- Version movil -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-violet-700 rounded-md md:hidden">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

  <!-- Version escritorio -->
    <div class="hidden md:flex flex-row gap-4">
    <a href="/login" class="text-white hover:bg-violet-700 transition ease-in-out py-2 px-4 rounded-md">Login</a>
    <a href="/signup" class="text-white bg-sky-500 hover:bg-sky-600 transition ease-in-out  py-2 px-4 rounded-md">Signup</a>
    </div>

    <!-- Menú movil -->
    <div class="bg-gray-200 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
        <a href="/login" class="text-black font-bold hover:bg-violet-700 transition ease-in-out py-2 px-4 rounded-md flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>              
            Login</a>
        <a href="/signup" class="text-white font-bold bg-sky-500 hover:bg-sky-600 transition ease-in-out  py-2 px-4 rounded-md flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Signup</a>
    </div>
</div>
    `
};

const createNavSignup = () => {
    navBar.innerHTML= `
    <div class="max-w-7xl h-16 mx-auto flex items-center justify-between px-4">
                   
    <a class="text-2xl font-bold font-courgette flex items-center gap-2 text-white" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
    Contactly
</a>

<!-- Version movil -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-violet-700 rounded-md md:hidden">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

  <!-- Version escritorio -->
    <div class="hidden md:flex flex-row gap-4">
    <a href="/login" class="text-white hover:bg-violet-700 transition ease-in-out py-2 px-4 rounded-md">Login</a>
    </div>

    <!-- Menú movil -->
    <div class="bg-slate-200 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
        <a href="/login" class="text-black font-bold hover:bg-violet-700 transition ease-in-out py-2 px-4 rounded-md flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>              
            Login</a>
    </div>
</div>
    `
};

const createNavLogin = () => {
    navBar.innerHTML= `
    <div class="max-w-7xl h-16 mx-auto flex items-center justify-between px-4">
                   
    <a class="text-2xl font-bold font-courgette flex items-center gap-2 text-white" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
    Contactly
</a>

<!-- Version movil -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-violet-700 rounded-md md:hidden">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

  <!-- Version escritorio -->
    <div class="hidden md:flex flex-row gap-4">
    <a href="/signup" class="text-white  hover:bg-violet-700 transition ease-in-out  py-2 px-4 rounded-md">Signup</a>
    </div>

    <!-- Menú movil -->
    <div class="bg-slate-200 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
        <a href="/signup" class="text-white font-bold bg-sky-500 hover:bg-sky-600 transition ease-in-out  py-2 px-4 rounded-md flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Signup</a>
    </div>
</div>
    `
};

const createNavContacts = () => {
    navBar.innerHTML= `
    <div class="max-w-7xl h-16 mx-auto flex items-center justify-between px-4">
                   
    <a class="text-2xl font-bold font-courgette flex items-center gap-2 text-white" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
    Contactly
</a>

<!-- Version movil -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-violet-700 rounded-md md:hidden">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <!-- version escritorio -->
    <div class="hidden md:flex flex-row gap-4">
        <button id="close-btn" class="text-white transition ease-in-out font-bold hover:bg-violet-700 py-2 px-4 rounded-lg">Log out</button>
    </div>

    <!-- menu movil -->
    <div class="bg-slate-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
        <button id="close-btn" class="text-white transition ease-in-out font-bold hover:bg-violet-700 py-2 px-4 rounded-lg">Log out</button>
    </div>
    `
};


if (window.location.pathname === '/') {
    createNavHome();
} else if (window.location.pathname === '/signup/') {
    createNavSignup();
} else if (window.location.pathname === '/login/') {
    createNavLogin();
} else if (window.location.pathname === '/contacts/') {
    createNavContacts();
}

const navBtn = navBar.children[0].children[1];
const menuMobile = navBar.children[0].children[3];

navBtn.addEventListener('click', e => {
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
         navBtn.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        `; 
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');
    } else {
        menuMobile.classList.add('hidden');
        menuMobile.classList.remove('flex');
        navBtn.classList.remove('active');
        navBtn.innerHTML = `
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         `;   
    }
   
})


const closeBtnDesktop = navBar.children[0].children[2].children[0];

const closeBtnMobile = navBar.children[0].children[3].children[0];



closeBtnDesktop.addEventListener('click', async e => {
    console.log(axios);
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/login';
    } catch (error) {
        console.log(error);
    }

});

closeBtnMobile.addEventListener('click', async e => {
    console.log(axios);
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/login';
    } catch (error) {
        console.log(error);
    }

});

