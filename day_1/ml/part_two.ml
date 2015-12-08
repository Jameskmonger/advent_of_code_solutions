let input = "()())((()";;

let calc_flr str =
  let len = String.length str in
    let rec loop flr ptr =
      if flr = -1 then
        Printf.printf "You entered the basement at floor %d\n" ptr;

      if ptr < len then match str.[ptr] with
        | '(' -> loop (flr + 1) (ptr + 1)
        | ')' -> loop (flr - 1) (ptr + 1)
        | _ -> loop flr (ptr + 1)
      else (Printf.printf "You are on floor %d\n" flr) in
        loop 0 0;;

calc_flr input;;
