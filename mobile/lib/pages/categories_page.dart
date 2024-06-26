import 'package:flutter/material.dart';
import 'package:my_app/components/navbar_page.dart';

class CategoriesPage extends StatelessWidget {
  const CategoriesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: NavbarPage(),
      body: Center(
        child: SizedBox(
          width: 800,
          height: 800,
          child: DataTable(
            columns: const <DataColumn>[
              DataColumn(
                label: Expanded(
                  child: Text(
                    'No',
                    style: TextStyle(fontStyle: FontStyle.italic),
                  ),
                ),
              ),
              DataColumn(
                label: Expanded(
                  child: Text(
                    'Categories',
                    style: TextStyle(fontStyle: FontStyle.italic),
                  ),
                ),
              ),
            ],
            rows: const <DataRow>[
              DataRow(
                cells: <DataCell>[
                  DataCell(Text('1')),
                  DataCell(Text('Makanan')),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text('2')),
                  DataCell(Text('Bahan Kimia')),
                ],
              ),
              DataRow(
                cells: <DataCell>[
                  DataCell(Text('3')),
                  DataCell(Text('Pakaian')),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
