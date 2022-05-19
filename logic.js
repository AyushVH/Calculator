let bnt_array = document.getElementsByClassName("btn");
        let screen = document.getElementById("screen");

        const cal = (e) => {

            let btn_text = e.target.innerText;

            if (btn_text == 'AC') {
                screen.value = "";
            }
            else if (btn_text == '=') {
                try {
                    screen.value = eval(screen.value);
                }
                catch {
                    screen.value = "Invalid Syntax";

                }
            }

            else if (btn_text == "⬅") {
                screen.value = screen.value.slice(0, screen.value.length - 1)
            }
            else {
                screen.value = screen.value + btn_text;
            }

        }


        for (btn of bnt_array) {
            btn.addEventListener("click", cal);
        }