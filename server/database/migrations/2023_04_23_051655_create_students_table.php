<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('std_ID');
            $table->string('std_Name');
            $table->enum('std_Gender', ['male', 'female']);
            $table->string('std_Email');
            $table->string('std_Password');
            $table->binary('std_Photo')->nullable();
            $table->date('std_Date-of-Birth');
            $table->string('std_Parents/Guardian');
            $table->integer('std_CP-Number');
            $table->foreignId('tchr_Id');
            $table->foreignId('class_Id');
            $table->foreignId('school_Id');
            $table->timestamps();

            $table->index('tchr_Id');
            $table->index('class_Id');
            $table->index('school_Id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
