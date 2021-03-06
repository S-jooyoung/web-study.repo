{
  /**
   * Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail âą
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "login success!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> đ  body
  // fail -> đ­ reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`đ ${state.response.body}`);
    } else {
      console.log(`đ­ ${state.reason}`);
    }
  }

  const success: SuccessState = {
    response: {
      body: "ěąęłľěëë¤.",
    },
  };
  printLoginState(success);
}
