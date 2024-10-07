void main(){

  print("---Faktorial---");
  int a = 10, b = 20, c = 30;

  print("faktorial $a : ${HitungFaktorial(a)}");
  print("faktorial $b : ${HitungFaktorial(b)}");
  print("faktorial $c : ${HitungFaktorial(c)}");

}

BigInt HitungFaktorial(angka){

  BigInt hasil = BigInt.one;

  for(int i = 1; i <= angka; i++){
    hasil *= BigInt.from(i);
  }

  return hasil;

}