const cardNumber = document.getElementById('credit-card');

        const validateCardNumber = input => {
            let matches = input.match(/(\d{4}\s?){4}/);

            if (matches) {
                cardNumber.classList.remove('is-invalid');
                cardNumber.classList.add('is-valid');
            } else {
                cardNumber.classList.remove('is-valid');
                cardNumber.classList.add('is-invalid');
            }
        };

        cardNumber.addEventListener('input', e => {
            validateCardNumber(e.target.value);
        });

        const dueDate = document.getElementById('due-date');

        const validateDueDate = input =>{
            let matches = input.match(/\d{2}\/\d{2}/);
            if(matches){
                dueDate.classList.remove('is-invalid');
                dueDate.classList.add('is-valid');
            } else{
                dueDate.classList.remove('is-valid');
                dueDate.classList.add('is-invalid');
            }
        };

        dueDate.addEventListener('input', e => {
            validateDueDate(e.target.value);
        });

        $('select[name="payment-method"]').change(function () {
            if ($(this).val() != 0) {
                $('input[name="creditCard"]').prop('disabled', false);
            } else { $('input[name="creditCard"]').prop('disabled', true); }
        });
        $('input[name="creditCard"]').change(function () {
            if ($(this).val() != 0) {
                $('input[name="dueDate"]').prop('disabled', false);
            } else { $('input[name="dueDate"]').prop('disabled', true); }
        });
        $('input[name="dueDate"]').change(function () {
            if ($(this).val() != 0) {
                $('input[name="securityCode"]').prop('disabled', false);
            } else { $('input[name="securityCode"]').prop('disabled', true); }
        });
        $('input[name="securityCode"]').change(function () {
            if ($(this).val() != 0) {
                $('button[name="sub"]').prop('disabled', false);
            } else { $('button[name="sub"]').prop('disabled', true); }
        });

        const func = function (name) {
           

        }