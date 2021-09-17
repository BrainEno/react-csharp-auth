// using System.Collections.Generic;

// namespace ReactCsharp.Entities
// {
//     public class Menus:ICollection<MenuItem>
//     {
//         public IEnumerator<MenuItem> GetEnumerator()
//         {
//             return new MenuItemEnumerator(this);
//         }
//     }
//     public class MenuItem
//     {
//         public string Name { get; set; }
//         public string Title { get; set; }
//         public string Desc { get; set; }
//         public string To { get; set; }
//         public ICollection<MenuItem> Children { get; set; }
//     }

//     public class MenuItemEnumerator:IEnumerator<MenuItem>
//     {
//         private Menus _menus;
//     }
// }