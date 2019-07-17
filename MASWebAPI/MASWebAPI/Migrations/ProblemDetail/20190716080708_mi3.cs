using Microsoft.EntityFrameworkCore.Migrations;

namespace MASWebAPI.Migrations.ProblemDetail
{
    public partial class mi3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ProblemName",
                table: "ProblemDetails",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(150)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ProblemName",
                table: "ProblemDetails",
                type: "nvarchar(150)",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
