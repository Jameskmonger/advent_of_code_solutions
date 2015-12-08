let word = "(())";;

let dir = function
  | '(' -> 1
  | ')' -> -1
  | _ -> 0;;

let z =
  (String.iter (fun (c: char) ->
    let d = dir c in
      Printf.printf "%d is the direction of %c\n" d c
  ) word);;
