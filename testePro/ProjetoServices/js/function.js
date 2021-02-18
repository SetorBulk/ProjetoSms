
function enviarSms() {
  const Telefone = document.getElementById('txtTelForm1')

  axios({
    method: 'post',
    url: 'https://painel.mtexpert.com.br/api/send.php',

    headers: {
      'Authorization': 'Basic c2VydmljZXMxOmR2LTkxQlEk',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: { "codigo_carteira": "375",
    "codigo_fornecedor": "MTExpert_Short_Todas",
     "envios": [{ "numero": Telefone.value,
      "mensagem": "Mensagem teste Short Code #BulkActions #GrupoServices",
       "campo_informado": "",
        "url_callback_mo": "",
         "url_callback_status": "", "url_callback_dlr": "" }] 
        },
  }).then(obj => {console.log(obj)}).catch(erro => console.log(erro));
  return false;
};
console.log("Working")


