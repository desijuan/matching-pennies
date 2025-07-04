# Matching Pennies

## Setup, compile & run tests

Ver [README.md](README.md).

## Contrato

`contract/src/matching-pennies.compact`

## Solución

Funciona muy parecido con la implementación de referencia en Solidty. Un
commitment scheme en el que primero juegan los dos jugadores y después revelan.

Diferencias:
 - usa secretKey como parámetro directamente
 - usa timestamp para impedir que algún jugador stallee la partida

## secretKey como parámetro directamente

En Compact los parámetros de los circuitos son secretos. Puedo usarlos
directamente sin necesidad de estar usando nonce y nonce_hash y trackeándolos en
el ledger.

## timestamp para impedir que algún jugador stallee la partida

Una vez que los dos jugaron se puede resolver la partida. Si ningún jugador
reveló, luego de 5 minutos desde la última jugada (jugador B) es empate. Si uno
sólo revelo, luego de 5 minutos gana ese jugador. Si los dos revelaron no
importa el timestamp, la partida se resuelve normalmente. De esta forma se
impide que se pueda stallear la partida.

## Tests

Hay un simulador de contrato y una suite de tests en `./contract/src/test`.

Instrucciones para correrlos en [README.md](README.md).

## Extra

No llegué a hacer el cli. Por cuestiones de tiempo, pero puedo hacerlo.
