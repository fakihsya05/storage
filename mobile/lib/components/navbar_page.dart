import 'package:flutter/material.dart';
import 'package:my_app/pages/categories_page.dart';
import 'package:my_app/pages/product_page.dart';
import 'package:my_app/pages/login_page.dart';

class NavbarPage extends StatelessWidget implements PreferredSizeWidget {
  NavbarPage({super.key});

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final bool isLargeScreen = width > 800;

    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      titleSpacing: 0,
      leading: isLargeScreen
          ? null
          : IconButton(
              icon: const Icon(Icons.menu),
              onPressed: () => _scaffoldKey.currentState?.openDrawer(),
            ),
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "Storage Management",
              style:
                  TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
            ),
            if (isLargeScreen) Expanded(child: _navBarItems(context))
          ],
        ),
      ),
      actions: const [
        Padding(
          padding: EdgeInsets.only(right: 16.0),
          child: CircleAvatar(child: _ProfileIcon()),
        )
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  Widget _navBarItems(BuildContext context) => Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: _menuItems
            .map(
              (item) => InkWell(
                onTap: () {
                  if (item == 'Product') {
                    // pushReplacement to Product page
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                        builder: (context) => ProductPage(),
                      ),
                    );
                  } else if (item == 'Categories') {
                    // pushReplacement to Categories page
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                        builder: (context) => const CategoriesPage(),
                      ),
                    );
                  }
                },
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 24.0, horizontal: 16),
                  child: Text(
                    item,
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ),
            )
            .toList(),
      );
}

final List<String> _menuItems = <String>[
  'Product',
  'Categories',
];

enum Menu { itemOne, itemTwo, itemThree }

class _ProfileIcon extends StatelessWidget {
  const _ProfileIcon();

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<Menu>(
        icon: const Icon(Icons.person),
        offset: const Offset(0, 40),
        onSelected: (Menu item) {
          if (item == Menu.itemOne) {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(
                builder: (context) => const LoginPage(),
              ),
            );
          }
        },
        itemBuilder: (BuildContext context) => <PopupMenuEntry<Menu>>[
              const PopupMenuItem<Menu>(
                value: Menu.itemOne,
                child: Text('Logout'),
              ),
              // const PopupMenuItem<Menu>(
              //   value: Menu.itemTwo,
              //   child: Text('Logout'),
              // ),
            ]);
  }
}
