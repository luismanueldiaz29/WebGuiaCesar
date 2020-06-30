using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace WebGuiaCesar.Models
{
    public class GalleryImageResponse
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Name")]
        public string Name { get;  set; }

        [JsonProperty("Description")]
        public string Description { get; set; }

        [JsonProperty("InfoInterest")]
        public string InfoInterest { get; set; }

        [JsonProperty("ImagesPath")]
        public string ImagesPath { get; set; }

        // public GalleryImageResponse(string name, string description, string infoInterest)
        // {
        //     Name = name;
        //     Description = description;
        //     InfoInterest = infoInterest;
        //     ImagesPath = "";
        // }

        // public void AddImage(string fileName)
        // {
        //     string Url = Path.Combine(Directory.GetCurrentDirectory(), "images");
            // ImagesPath = ($"/images/{fileName}");
            // ImagesPath = ($"{Url}/{fileName}");
        // }
    }
}