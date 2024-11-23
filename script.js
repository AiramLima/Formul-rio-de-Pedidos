document.addEventListener('DOMContentLoaded', function () {
    const loginSection = document.getElementById('login-section');
    const requestSection = document.getElementById('request-section');
    const materialType = document.getElementById('material-type');
    const epiOptionsSection = document.getElementById('epi-options-section');
    const epcOptionsSection = document.getElementById('epc-options-section');
    const sizeSection = document.getElementById('size-section');
    const lengthSection = document.getElementById('length-section');
    const successMessage = document.getElementById('success-message');
    const orderForm = document.getElementById('order-form');

    // Controle do login
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '1' && password === '1') {
            loginSection.style.display = 'none';
            requestSection.style.display = 'block';
        } else {
            alert('Nome de usuário ou senha incorretos!');
        }
    });

    // Mudança de escolha de tipo de material
    materialType.addEventListener('change', function () {
        if (materialType.value === 'epi') {
            epiOptionsSection.classList.remove('hidden');
            epcOptionsSection.classList.add('hidden');
        } else if (materialType.value === 'epc') {
            epcOptionsSection.classList.remove('hidden');
            epiOptionsSection.classList.add('hidden');
        }
    });

    // Mudança de escolha de EPI
    document.getElementById('epi-options').addEventListener('change', function () {
        const selectedEpi = this.value;
        if (selectedEpi === 'camiseta' || selectedEpi === 'sapato') {
            sizeSection.classList.remove('hidden');
            lengthSection.classList.add('hidden');
        } else {
            sizeSection.classList.add('hidden');
            lengthSection.classList.add('hidden');
        }
    });

    // Mudança de escolha de EPC
    document.getElementById('epc-options').addEventListener('change', function () {
        if (this.value === 'cabo_aco') {
            lengthSection.classList.remove('hidden');
            sizeSection.classList.add('hidden');
        } else {
            lengthSection.classList.add('hidden');
            sizeSection.classList.add('hidden');
        }
    });

    // Exibir mensagem de sucesso após pedido
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        successMessage.classList.remove('hidden');
        orderForm.reset(); // Limpa o formulário após o envio
        setTimeout(function() {
            successMessage.classList.add('hidden'); // Oculta a mensagem após alguns segundos
        }, 3000); // Mensagem oculta após 3 segundos
    });
});
