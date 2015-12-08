let input = "((((())";;

let calc_flr str =
  let len = String.length str in
    let rec loop flr ptr =
      if ptr < len then match str.[ptr] with
        | '(' -> loop (flr + 1) (ptr + 1)
        | ')' -> loop (flr - 1) (ptr + 1)
        | _ -> loop flr (ptr + 1)
      else flr in
        loop 0 0;;

Printf.printf "You are on floor %d\n" (calc_flr input);;
