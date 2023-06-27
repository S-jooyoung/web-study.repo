import 'package:flutter/material.dart';

void main() => runApp(const AdvBasicsApp());

class AdvBasicsApp extends StatelessWidget {
  const AdvBasicsApp({super.key});

  @override
  Widget build(BuildContext context) {
    final ButtonStyle style = ElevatedButton.styleFrom(
        backgroundColor: Colors.deepPurple,
        textStyle: const TextStyle(fontSize: 20));
    return MaterialApp(
      home: Scaffold(
        body: Container(
            padding: const EdgeInsets.all(16.0),
            color: const Color.fromARGB(255, 76, 5, 146),
            child: Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  Image.asset(
                    'assets/images/quiz-logo.png',
                    width: 300,
                  ),
                  const Padding(
                    padding: EdgeInsets.only(top: 70),
                    child: Text(
                      "Learn Flutter the fun away!",
                      style: TextStyle(color: Colors.white, fontSize: 20),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 40),
                    child: ElevatedButton(
                        style: style,
                        onPressed: () {},
                        child: const Text("start Quiz")),
                  )
                ],
              ),
            )),
      ),
    );
  }
}
