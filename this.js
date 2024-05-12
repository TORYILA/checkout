 
        function switchPages() {
           let inputs = document.querySelectorAll('.maindiv .inputsdiv input');
            let isValid = true;
            inputs.forEach(input => {
                if (input.value === '') {
                    isValid = false;
                    return;
                }
            });
            if (isValid) {
                document.querySelector('.maindiv').style.display = 'none';
                document.querySelector('.maindiv2').style.display = 'flex';
                const currentItem = document.querySelector('.current-item');
                const nextItem = document.getElementById('stepwizarditem2');
                currentItem.classList.remove('current-item');
                nextItem.classList.add('current-item');
            } else {
                alert('Please fill in all fields');
            }
        }

        function switchPagess() {
            const inputs = document.querySelectorAll('.maindiv2 .inputsdiv input');
            let isValid = true;
            inputs.forEach(input => {
                if (input.value === '') {
                    isValid = false;
                    return;
                }
            });
            if (isValid) {
                document.querySelector('.maindiv2').style.display = 'none';
                document.querySelector('.maindiv3').style.display = 'flex';
                const currentItem = document.querySelector('.current-item2');
                const nextItem = document.getElementById('stepwizarditem3');
                currentItem.classList.remove('current-item');
                nextItem.classList.add('current-item');
            } else {
                alert('Please fill in all fields');
            }
        }

        function switchPagesss() {
            document.querySelector('.maindiv3').style.display = 'none';
                document.querySelector('.maindiv4').style.display = 'flex';
                const currentItem = document.querySelector('.current-item3');
                const nextItem = document.getElementById('stepwizarditem4');
                currentItem.classList.remove('current-item');
                nextItem.classList.add('current-item');
        }
        function switchPagessss(){
            const currentItem = document.querySelector('.current-item4');
                
                currentItem.classList.remove('current-item');
               
        }

        function switchtoPaypal() {
            
            document.querySelector('.inputsdiv1').style.display = 'none';
            document.querySelector('.inputsdiv2').style.display = 'block';
        }
        function switchtoMastercard() {
            // Hide inputsdiv and show inputsdiv2
            
            document.querySelector('.inputsdiv2').style.display = 'none';
            document.querySelector('.inputsdiv1').style.display = 'block';
        }
        