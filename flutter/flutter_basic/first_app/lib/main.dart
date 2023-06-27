import 'package:flutter/material.dart';
import 'package:first_app/gradient_container.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: GradientContainer(const [
          Colors.deepPurple,
          Color.fromARGB(255, 101, 92, 117),
        ]),
      ),
    ),
  );
}
