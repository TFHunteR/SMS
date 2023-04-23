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
        Schema::table('students', function (Blueprint $table) {
            $table->binary('std_Photo')->nullable()->change();
            $table->renameColumn('std_Date-of-Birth', 'std_date_of_birth');
            $table->renameColumn('std_Parents/Guardian', 'std_parents_guardian');
            $table->renameColumn('std_CP-Number', 'std_cp_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->binary('std_Photo')->nullable(false)->change();
            $table->renameColumn('std_date_of_birth', 'std_Date-of-Birth');
            $table->renameColumn('std_parents_guardian', 'std_Parents/Guardian');
            $table->renameColumn('std_CP-Number', 'std_cp_number');
        });
    }
};
