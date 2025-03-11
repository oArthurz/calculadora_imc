function calculaIMC( )
      {
        peso = document.getElementById("peso").value
        altura = document.getElementById("altura").value

        imc = peso / altura ** 2
        if(imc <= 19.01)
        {
          console.log(`Seu IMC é : ${imc.toFixed(2)} Abaixo do peso)`)

          resutado = document.getElementById("exibe")
          imcTela = document.createElement("label")
          imcTela.textContent = `Seu IMC é : ${imc.toFixed(2)} (Abaixo do peso)`
          resutado.appendChild(imcTela)
        }

        else if(imc <= 25.08)
        {
          console.log(`Seu IMC é : ${imc.toFixed(2)} (Peso Normal)`)

          resutado = document.getElementById("exibe")
          imcTela = document.createElement("label")
          imcTela.textContent = `Seu IMC é : ${imc.toFixed(2)} (Peso Normal)`
          resutado.appendChild(imcTela)
        }

        else if(imc <= 27.03)
        {
          console.log(`Seu IMC é: ${imc.toFixed(2)} (Pouco acima do peso)`)

          resutado = document.getElementById("exibe")
          imcTela = document.createElement("label")
          imcTela.textContent = `Seu IMC é : ${imc.toFixed(2)} (Peso Normal)`
          resutado.appendChild(imcTela)
        }

        else if(imc < 41)
        {
          console.log(`Seu IMC é: ${imc.toFixed(2)} (Obesidade)`)

          resutado = document.getElementById("exibe")
          imcTela = document.createElement("label")
          imcTela.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade)`
          resutado.appendChild(imcTela)
        }
      }