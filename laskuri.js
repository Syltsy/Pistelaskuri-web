
    /*var mathP = [
      L: 46,
      E: 43,
      M: 40,
      C: 35,
      B: 27,
      A: 19
    ],
      var mathL = [
        L: 40,
        E: 35,
        M: 27,
        C: 19,
        B: 13,
        A: 6
      ],
        var kieliP = [
          L: 46,
          E: 41,
          M: 34,
          C: 26,
          B: 18,
          A: 10
        ],
    var kieliK = [
      L: 38,
      E: 34,
      M: 26,
      C: 18,
      B: 12,
      A: 5
    ]
    var kieliL = [
      L: 30,
      E: 27,
      M: 21,
      C: 15,
      B: 9,
      A: 3
    ]
    var muut = [
      L: 30,
      E: 27,
      M: 21,
      C: 15,
      B: 9,
      A: 3
    ]*/

document.getElementsByName('arvosana')

function selected(){
  var selector = document.getElementById('yolista');
  var value = selector[selector.selectedIndex].value;
  document.getElementById('display').innerHTML = value;
}
document.getElementById('btn').addEventListener('click', selected);

var lista = [];

function numeroLista(){
 boxvalue = document.getElementById('box').value;
 lista.push(boxvalue);
 console.log(lista);
}
