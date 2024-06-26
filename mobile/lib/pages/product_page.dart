import 'package:flutter/material.dart';
import 'package:my_app/components/navbar_page.dart';

class ProductPage extends StatelessWidget {
  ProductPage({super.key});

  final List<String> imageUrls = [
    'https://i0.wp.com/www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg?fit=800%2C552&ssl=1',
    'https://i0.wp.com/www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg?fit=800%2C552&ssl=1',
  ];

  final List<String> categories = [
    'Elektronik',
    'Fashion',
    'Pakaian',
    'Pakaian',
    'Perkakas',
    'Alat Rumah Tangga',
  ];

  final List<String> productNames = [
    'Smartphone',
    'Sunglasses',
    "Zenith X1000",
    "NeoFlex VR",
    "EchoSphere Max",
    "QuantumPulse X",
    "Galactic Prime",
    "Luminar Boost",
    "SwiftEdge Pro",
    "Titanium Nexus",
    "Zephyr Z200",
    "Photonix 5G"
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: NavbarPage(),
      body: GridView.builder(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 5,
          crossAxisSpacing: 10.0,
          mainAxisSpacing: 10.0,
        ),
        itemCount: 20,
        itemBuilder: (BuildContext context, int index) {
          String imageUrl = imageUrls[index % imageUrls.length];

          String category = categories[index % categories.length];
          String productName = productNames[index % productNames.length];

          return SizedBox(
            width: 200,
            height: 200,
            child: Card(
              color: const Color.fromARGB(255, 102, 102, 102),
              child: Column(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(top: 20.0),
                    child: Image.network(
                      imageUrl,
                      width: 300.0,
                      height: 250.0,
                      fit: BoxFit.fill,
                    ),
                  ),
                  const SizedBox(height: 10),
                  ListTile(
                    title: Text(
                      category,
                      style: const TextStyle(color: Colors.white),
                      textAlign: TextAlign.center,
                    ),
                    subtitle: Text(
                      productName,
                      style: const TextStyle(color: Colors.white),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
