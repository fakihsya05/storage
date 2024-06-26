import 'package:flutter/material.dart';
import 'package:my_app/components/navbar_page.dart';


class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: NavbarPage(),
      body: const Center(
        child: Text(
          'Selamat Datang di Storage Management App',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.w700,
              color: Colors.black45)),
      ),
    );
  }
}
