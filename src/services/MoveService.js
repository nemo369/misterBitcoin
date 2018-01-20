import UserService from "./UserService";

function addMove(amount,to) {
    var newMove = {
        at: Date.now(),
        amount,
        to
    }
    var user = UserService.getUser()
    user.moves.push(newMove)
    user.coins = user.coins - amount
    UserService.saveUser(user)
}

export default {
    addMove
}