let word = "(())";;

let f = 0;;

let dir i : int =
  if i = '(' then
    1
  else
    -1
  ;;

let process c =
  Printf.printf "%d\n" (dir c);;

String.iter process word;;
