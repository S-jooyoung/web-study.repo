import "package:flutter/material.dart";
import 'package:first_app/styled_text.dart';

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Colors.deepPurple,
            Color.fromARGB(255, 101, 92, 117),
          ],
        ),
      ),
      child: const Center(
        child: StyledText(),
      ),
    );
  }
}
