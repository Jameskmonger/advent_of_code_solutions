let word = "(())";;

let f = 0;;

let process c =
  if c = '(' then
    Printf.printf "u%c\n" c
  else
    Printf.printf "d%c\n" c
  ;;

let calc word = String.iter process word;;

calc word;;
