
var q1 = document.getElementById("q1").value = 0;
var q2 = document.getElementById("q2").value = 0;
var q3 = document.getElementById("q3").value = 0;
var q4 = document.getElementById("q4").value = 0;
var q5 = document.getElementById("q5").value = 0;
var q6 = document.getElementById("q6").value = 0;
var q7 = document.getElementById("q7").value = 0;
var q8 = document.getElementById("q8").value = 0;
var q9 = document.getElementById("q9").value = 0;

//q1 q2 q3
//q4 q5 q6
//q7 q8 q9

var titolo = document.getElementById("titolo").value = 1;

jQuery("h1").text("Turno del giocatore: 1");

jQuery(".q1").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q1 == 0)
    {
      jQuery(".q1").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q1 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q1 == 0)
    {
      jQuery(".q1").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q1 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q2").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q2 == 0)
    {
      jQuery(".q2").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q2 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q2 == 0)
    {
      jQuery(".q2").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q2 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q3").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q3 == 0)
    {
      jQuery(".q3").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q3 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q3 == 0)
    {
      jQuery(".q3").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q3 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q4").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q4 == 0)
    {
      jQuery(".q4").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q4 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q4 == 0)
    {
      jQuery(".q4").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q4 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q5").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q5 == 0)
    {
      jQuery(".q5").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q5 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q5 == 0)
    {
      jQuery(".q5").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q5 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q6").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q6 == 0)
    {
      jQuery(".q6").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q6 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q6 == 0)
    {
      jQuery(".q6").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q6 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q7").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q7 == 0)
    {
      jQuery(".q7").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q7 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q7 == 0)
    {
      jQuery(".q7").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q7 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q8").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q8 == 0)
    {
      jQuery(".q8").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q8 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q8 == 0)
    {
      jQuery(".q8").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q8 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }
});
jQuery(".q9").click(function()
{
  if (titolo == 1) //primo giocatore
  {
    if (q9 == 0)
    {
      jQuery(".q9").text("X");
      jQuery("h1").text("Turno del giocatore: 2");
      q9 = 1;
      titolo = 2;
      fammi_vedere();
    }
  }
  if (titolo == 2)
  {
    if(q9 == 0)
    {
      jQuery(".q9").text("O");
      jQuery("h1").text("Turno del giocatore: 1");
      q9 = 2;
      titolo = 1;
      fammi_vedere();
    }
  }

});

function fammi_vedere()
{
   console.log(q1 + " " + q2 + " " + q3);
   console.log(q4 + " " + q5 + " " + q6);
   console.log(q7 + " " + q8 + " " + q9);
   if ((q1 == 1 && q4 == 1 && q7 == 1) || (q2 == 1 && q5 == 1 && q8 == 1) || (q3 == 1 && q6 == 1 && q9 == 1) || (q1 == 1 && q2 == 1 && q3 == 1) || (q4 == 1 && q5 == 1 && q6 == 1) || (q7 == 1 && q8 == 1 && q9 == 1) || (q1 == 1 && q5 == 1 && q9 == 1) || (q3 == 1 && q5 == 1 && q7 == 1))
   {
      console.log("Ha vinto il giocatore 1");
      jQuery("h1").text("Ha vinto il giocatore 1");
      if (q1 == 0) {q1 = 3;}
      if (q2 == 0) {q2 = 3;}
      if (q3 == 0) {q3 = 3;}
      if (q4 == 0) {q4 = 3;}
      if (q5 == 0) {q5 = 3;}
      if (q6 == 0) {q6 = 3;}
      if (q7 == 0) {q7 = 3;}
      if (q8 == 0) {q8 = 3;}
      if (q9 == 0) {q9 = 3;}
   }
   if ((q1 == 2 && q4 == 2 && q7 == 2) || (q2 == 2 && q5 == 2 && q8 == 2) || (q3 == 2 && q6 == 2 && q9 == 2) || (q1 == 2 && q2 == 2 && q3 == 2) || (q4 == 2 && q5 == 2 && q6 == 2) || (q7 == 2 && q8 == 2 && q9 == 2) || (q1 == 2 && q5 == 2 && q9 == 2) || (q3 == 2 && q5 == 2 && q7 == 2))
   {
      console.log("Ha vinto il giocatore 2");
      jQuery("h1").text("Ha vinto il giocatore 2");
      if (q1 == 0) {q1 = 3;}
      if (q2 == 0) {q2 = 3;}
      if (q3 == 0) {q3 = 3;}
      if (q4 == 0) {q4 = 3;}
      if (q5 == 0) {q5 = 3;}
      if (q6 == 0) {q6 = 3;}
      if (q7 == 0) {q7 = 3;}
      if (q8 == 0) {q8 = 3;}
      if (q9 == 0) {q9 = 3;}
   }
}
//ragionamento:
//se il turno è del giocatore 1 allora
  //se il campo è vuoto allora metti una X

//altrimenti se il turno è del giocatore 2 allora
  //se il campo è vuoto allora metti una O
