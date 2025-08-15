using System.Text.Json;
using System.Net.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.Diagnostics;

namespace FirstAud
{
    public class Program
    {
        public static async Task Movie(HttpContext context)
        {
            var title = context.Request.Query["title"];
            if (string.IsNullOrWhiteSpace(title))
            {
                await context.Response.WriteAsync(@"
                    <html>
                        <head>
                            <meta charset='UTF-8'>
                            <title>Поиск фильма</title>
                        </head>
                        <body>
                            <h2>Введите название фильма:</h2>
                            <form method='get'>
                                <input type='text' name='title' />
                                <button type='submit'>Поиск</button>
                            </form>
                        </body>
                    </html>
                ");
                return;
            }
            var apiKey = "a0f72d53";
            var url = $"http://www.omdbapi.com/?t={Uri.EscapeDataString(title)}&apikey={apiKey}";
            using var httpClient = new HttpClient();
            string json;
            try
            {
                json = await httpClient.GetStringAsync(url);
            }
            catch (HttpRequestException e)
            {
                await context.Response.WriteAsync($"Ошибка при запросе к API: {e.Message}");
                return;
            }
            var doc = JsonDocument.Parse(json);
            var root = doc.RootElement;
            var html = $@"
                <html>
                    <head>
                        <meta charset='UTF-8'>
                        <title>{root.GetProperty("Title")}</title>
                    </head>
                    <body>
                        <h1>{root.GetProperty("Title")}</h1>
                        <p><strong>Год:</strong> {root.GetProperty("Year")}</p>
                        <p><strong>Рейтинг:</strong> {root.GetProperty("imdbRating")}</p>
                        <p><strong>Длительность:</strong> {root.GetProperty("Runtime")}</p>
                        <p><strong>Режиссер:</strong> {root.GetProperty("Director")}</p>
                        <p><strong>Актеры:</strong> {root.GetProperty("Actors")}</p>
                        <p><strong>Описание:</strong> {root.GetProperty("Plot")}</p>
                        <img src='{root.GetProperty("Poster")}' alt='Постер' />
                    </body>
                </html>";
            context.Response.ContentType = "text/html; charset=UTF-8";
            await context.Response.WriteAsync(html);
        }
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.WebHost.UseUrls("http://localhost:5000");
            var app = builder.Build();
            Task.Run(async () =>
            {
                await Task.Delay(1000);
                Process.Start(new ProcessStartInfo("http://localhost:5000")
                {
                    UseShellExecute = true
                });
            });
            app.MapGet("/", Movie);
            app.Run();
        }
    }
}
